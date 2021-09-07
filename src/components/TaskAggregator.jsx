import styles from "../styles/TaskAggregator.module.scss";

import { useContext, useEffect, useState } from "react";
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

  const [inputValue, setInputValue] = useState("");

  const { query } = useRouter();

  const time = useContext(TimeContext);
  const user = useContext(UserContext);

  const { lists, tags, tasks } = user;
  const { filter, list, tag } = query;

  const [allTasks, setAllTasks] = useState(tasks);
  const [updater, setUpdater] = useState(0);
  const [onListSection, setOnListSection] = useState(false);
  const [onTagSection, setOnTagSection] = useState(false);

  const [listId, setListId] = useState(null);
  const [tagId, setTagId] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);

  //days
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().slice(0, 10);
  }

  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setDeadlineDate(null);
  }, [query]);

  useEffect(() => {
    if (filter) {
      let { date } = time;

      switch (filter) {
        case "today":
          setDeadlineDate(date);
          setPlaceholder(`Add task with due date for "Today"`);
          break;
        case "tomorrow":
          setDeadlineDate(addDays(date, 1));
          setPlaceholder(`Add task with due date for "Tomorrow"`);
          break;
        case "week":
          setDeadlineDate(addDays(date, 7));
          setPlaceholder(`Add task with deadline within "7 days"`);
          break;
        case "unlisted":
          setPlaceholder(`Add task to "Inbox"`);
          break;
      }

      setOnListSection(false);
      setOnTagSection(false);
    } else if (list) {
      for (const { id, name } of lists) {
        if (id === Number(list)) {
          setListId(id);
          setTagId(null);
          // console.log(template.list);
          setOnListSection(true);
          setPlaceholder(`Add task to list "${name}"`);
          break;
        }
      }
      setOnTagSection(false);
    } else if (tag) {
      for (let { id, label } of tags) {
        if (id === Number(tag)) {
          setTagId(id);
          setListId(null);
          setOnTagSection(true);
          setPlaceholder(`Add task with tag "${label}"`);
          break;
        }
      }
      setOnListSection(false);
    }
  }, [user]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      let currentDate = time.fullTime.toString().slice(0, -6);
      let currentSecond = Date.now().toString().slice(-6);

      template.id = Number(currentDate + currentSecond);
      template.creationDate = new Date(Number(currentDate + currentSecond))
        .toISOString()
        .slice(0, -8);
      template.deadline = deadlineDate;
      template.title = inputValue;
      template.list = listId;
      template.tags = [tagId];
      console.log(template);

      addTask(template);

      if (onListSection) {
        updateLists(template);
      } else if (onTagSection) {
        console.log(template.tags);
        updateTags(template);
      }

      setListId(null);
      setTagId(null);
      setDeadlineDate(null);

      // user.setContext(newData);
    }
  };

  const updateLists = (task) => {
    let listsCopy = user.lists;
    listsCopy.forEach((list) => {
      if (list.id === task.list) {
        list.tasks.push(task.id);
      }
    });

    user.setContext({ ...user, lists: listsCopy });
  };
  const updateTags = (task) => {
    let tagsCopy = user.tags;
    tagsCopy.forEach((tag) => {
      if (tag.id === task.tags[0]) {
        tag.tasks.push(task.id);
      }
    });

    user.setContext({ ...user, tags: tagsCopy });
  };

  const addTask = (task) => {
    // setNewData(task);

    setAllTasks([...allTasks, task]);
    setUpdater(Date.now());
    // console.log(tasks);
    // console.log("seteando");
  };

  useEffect(() => {
    user.setContext({ ...user, tasks: allTasks });
  }, [updater]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder ? placeholder : `Add task to "Inbox"`}
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default TaskAggregator;
