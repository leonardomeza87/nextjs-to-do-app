import styles from "../styles/TaskAggregator.module.scss";

import { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { TimeContext } from "../contexts/TimeContext";
import { UserContext } from "../contexts/UserContext";

const TaskAggregator = () => {
  const template = {
    id: 0,
    title: "",
    description: "",
    completed: false,
    pinned: false,
    creationDate: 0,
    deadline: null,
    list: null,
    priority: null,
    tags: [],
    inTrash: false,
  };

  const [value, setValue] = useState("");
  const { query } = useRouter();

  const time = useContext(TimeContext);
  const { data, setData } = useContext(UserContext);
  const { lists, tags, tasks } = data;
  const { filter, list, tag } = query;

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().slice(0, 10);
  }

  let placeholder = "";

  if (filter) {
    let { date } = time;

    switch (filter) {
      case "today":
        template.deadline = date;
        placeholder = `Add task with due date for "Today"`;
        break;
      case "tomorrow":
        template.deadline = addDays(date, 1);
        placeholder = `Add task with due date for "Tomorrow"`;
        break;
      case "week":
        template.deadline = addDays(date, 7);
        placeholder = `Add task with deadline within "7 days"`;
        break;
    }
  } else if (list) {
    for (const { id, name } of lists) {
      if (id === Number(list)) {
        template.list = id;
        placeholder = `Add task to list "${name}"`;
        break;
      }
    }
  } else if (tag) {
    for (const { id, name } of tags) {
      if (id === Number(tag)) {
        template.tags = [id];
        placeholder = `Add task with tag "${name}"`;
        break;
      }
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      console.log(template);

      template.id = Number(
        time.fullTime.toString().slice(0, -6) + Date.now().toString().slice(-6)
      );
      template.title = value;
      console.log(template);

      let newData = data;
      newData.tasks.push(template);

      setData(newData);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder ? placeholder : `Add task to "Inbox"`}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default TaskAggregator;
