
import React from 'react';

const ReviewDateRange = ({ toggleExpanded, expanded, fullData, filters, setFilters }) => {

  const handleDateRangeChange = (event) => {
    const selectedDateRange = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      reviewDateRange: selectedDateRange,
    }));
  };



  return (
    <div className="reviewsFilterMenu filter_dropdown">
      <div className="title">
        Date Range <span className="arrow">&#9660;</span>
      </div>
      <div className="reviewMenuFlyout filter_dropdown_content">
        <div className="reviewMenuFlyoutContent ">
          <div className="user_reviews_date_range_explanation">
            To view reviews within a date range, please click and drag a
            selection on a graph above or click on a specific bar. <br />
            <br />
            <span className="reviewFilterBtn">
              <span>Show graph</span>
            </span>
          </div>

                <input
                    type="radio"
                    name="review_date_range"
                    id="review_date_range_all"
                    value="all"
                    checked={filters.reviewDateRange === 'all'}
                    onChange={handleDateRangeChange}
                />
                <label htmlFor="review_date_range_all">Lifetime</label><br />


                <input
                    type="radio"
                    name="review_date_range"
                    id="review_date_range_histogram"
                    value="include"
                    checked={filters.reviewDateRange === 'include'}
                    disabled={fullData}
                    onChange={handleDateRangeChange}
                />
                <label htmlFor="review_date_range_histogram">Only Specific Range (Select on graph above)&nbsp;</label><br />

                <input
                    type="radio"
                    name="review_date_range"
                    id="review_date_range_exclude_histogram"
                    value="exclude"
                    checked={filters.reviewDateRange === 'exclude'}
                    disabled={fullData}
                    onChange={handleDateRangeChange}
                />
                <label htmlFor="review_date_range_exclude_histogram">Exclude Specific Range (Select on graph above)&nbsp;</label><br />

            </div>

        </div>
      </div>
  );
};

export default ReviewDateRange;
