package com.example.book_network.common;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageResponse<T> {

    private List<T> list;
    private int number;
    private int size;
    private long totalElement;
    private int totalPages;
    private boolean first;
    private boolean last;
}
