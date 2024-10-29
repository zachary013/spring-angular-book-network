package com.example.book_network.book;

import com.example.book_network.common.BaseEntity;
import com.example.book_network.feedback.Feedback;
import com.example.book_network.history.BookTransactionHistory;
import com.example.book_network.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book extends BaseEntity {

    private String title;
    private String authorName;
    private String isbn; //Book Identifier
    private String synopsis;
    private String bookCover;
    private boolean archived;
    private boolean shareable;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "book")
    private List<BookTransactionHistory> histories;

    @Transient
    public double getRate() {
        if(feedbacks == null || feedbacks.isEmpty()) {
            return 0.0;
        }
        //Calculate books rating
        var rate = this.feedbacks.stream() //Streams are user to process data
                .mapToDouble(Feedback::getScore)
                .average() //Calculates average value
                .orElse(0.0); //list had invalid scores
        // 3.25 --> 3.0 || 3.64 --> 4.0
        double roundedRate = Math.round(rate * 10.0) / 10.0;
        return roundedRate;
    }

}
