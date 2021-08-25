import autosize from "autosize";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/TaskDescription.module.scss";

import AddIcon from "../../public/assets/add.svg";

import Tag from "./Tag";

const TaskDescription = () => {
  const textarea = useRef(null);
  const scrollArea = useRef(null);

  const [titleValue, setTitleValue] = useState("Title");
  const [descriptionValue, setDescriptionValue] =
    useState(`One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.

He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.

"What's happened to me? " he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.

A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.

It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops`);

  useEffect(() => {
    autosize(textarea.current);
  }, []);

  const handleChange = ({ target }) => {
    setDescriptionValue(target.value);
    autosize.update(textarea.current);
  };
  const handleTitle = ({ target }) => {
    setTitleValue(target.value);
  };

  return (
    <div className={styles.container} ref={scrollArea}>
      <div className={styles.title}>
        <input type="text" value={titleValue} onInput={handleTitle} />
      </div>
      <div className={styles.textarea}>
        <textarea
          ref={textarea}
          cols="30"
          rows="10"
          value={descriptionValue}
          onInput={handleChange}
        ></textarea>
      </div>
      <div className={styles.tags}>
        <Tag />
        <div className={styles.addTag}>
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;
