import { useState } from "react";
import { classNames } from "../../utils/js";
import Input from "../../atoms/input";
import "./type-header.scss";

const Typeheader = ({ customClass, onPost, id }) => {
  const blockName = "typeheader";
  const [comment, setComment] = useState('');
  return (
    <div className={classNames(blockName, customClass)}>
      <Input
        value={comment}
        onInputChange={e => setComment(e.target.value)}
        customClass={`${blockName}__input`}
        placeholder="Type your comment here..."
      />
      <div onClick={() => {onPost(id, comment); setComment('')}} className={`${blockName}__button`}>
        POST
      </div>
    </div>
  );
};

export default Typeheader;
