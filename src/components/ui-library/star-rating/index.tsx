import styles from "./index.module.scss";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

type StarRatingProps = {
  interactive: boolean;
  displayRating?: number;
  onClickCallback?: (rating: number) => void;
};

export default function StarRating({
  interactive,
  displayRating,
  onClickCallback,
}: StarRatingProps) {
  const [rating, setRating] = useState(!interactive && displayRating ? displayRating : 0);

  const handleRating = (value: number) => {
    setRating(value);
    if (onClickCallback) {
      onClickCallback(value);
    }
  };

  return (
    <>
      <Rating
        readonly={!interactive}
        onClick={handleRating}
        initialValue={rating}
        size={interactive ? 33 : 24}
        transition
        fillColor={"#0A838C"}
        emptyColor={"#BCB5C1"}
        allowFraction={true}
        className={styles.starRating}
      />
    </>
  );
}
