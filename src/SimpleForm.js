import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Event Name : </span>
        </label>
        &nbsp;&nbsp;
        <Field
          component="input"
          name="Event_name"
          type="text"
          placeholder="Event_Name"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>
          <span>Organizer ID : </span>
        </label>
        &nbsp;
        <Field
          component="input"
          name="Organizer_ID"
          type="text"
          placeholder="Organizer_ID"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>
          <span>Date : </span>
        </label>
        &nbsp;&nbsp;
        <Field
          component="input"
          name="Date"
          type="date"
          placeholder="dd/mm/yyyy"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>
          <span>Time : </span>
        </label>
        &nbsp;
        <Field
          component="input"
          name="Time"
          type="time"
          placeholder="hh:mm AM/PM"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>
          <span>Venue : </span>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Field
          component="input"
          name="Venue"
          type="text"
          placeholder="Venue"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>
          <span>Duration : </span>
        </label>
        &nbsp;&nbsp;
        <Field
          component="input"
          name="Duration"
          type="text"
          placeholder="xx hours"
          size="100"
        />
      </div>
      <br></br>
      <div>
        <label>Description</label>
        <div>
          <Field name="Description" component="textarea" rows="20" cols="100" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        &nbsp;&nbsp;
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
