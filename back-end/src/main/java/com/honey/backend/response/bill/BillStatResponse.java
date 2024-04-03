package com.honey.backend.response.bill;

public record BillStatResponse(
        int approved,
        int rejected,
        int disposedOrWithdrawn,
        int inProgress,
        int alternativeIncorporated,
        int totalCount) {

}