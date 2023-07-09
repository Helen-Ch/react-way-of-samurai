import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => (
                    <span
                        key={p}
                        className={currentPage === p ? styles.SelectedPage : undefined}
                        onClick={() => {
                            onPageChanged(p);
                        }}
                    >
                        {p}
                    </span>
                )
            )}
        </div>
    );
}

export default Paginator;