import * as React from 'react';
import { useRef } from 'react';
import classes from './EventsSearch.module.css';

interface EventsSearchProps {
  filterValue: string;
  onSearch: (tag: string) => void;
  tags: string[];
}

const EventsSearch: React.FC<EventsSearchProps> = ({
  filterValue,
  onSearch,
  tags,
}) => {
  const tagInputRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const selectedTag = tagInputRef.current.value;

    onSearch(selectedTag);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='tags'>Show me</label>
          <select
            defaultValue={filterValue}
            id='tags'
            onChange={submitHandler}
            ref={tagInputRef}
          >
            <option key='filter-option-all' value='all'>
              all work
            </option>
            {tags.map((tag) => {
              return (
                <option key={`filter-option-${tag}`} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default EventsSearch;
