/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { parseISO } from "date-fns";
import {
  FormContainer,
  Input,
  SContainer,
  Select,
  SwitchInput,
  SwitchLabel,
} from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  createTask,
  deleteTask,
  updatedTask,
  viewTask,
} from "../../services/tasks.services";
import { Loading } from "../../components/Collections/Loading";
import { ButtonPrimary } from "../../components/Core/Buttons/ButtonPrimary";

const Task = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, loading } = useAppSelector<any>((state) => state.tasks.task);

  const initialDateFrom = data ? parseISO(data.items.from) : new Date();
  const initialDateTo = data ? parseISO(data.items.to) : new Date();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "PENDING",
    urgent: false,
    importance: "",
    from: initialDateFrom,
    to: initialDateTo,
  });
  useEffect(() => {
    if (data) {
      setFormData(data.items);
    }
  }, [data]);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(viewTask(id));
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = () => {
    setFormData({ ...formData, urgent: !formData.urgent });
  };
  const handleFromDateChange = (date: any) => {
    setFormData({ ...formData, from: date });
  };
  const handleToDateChange = (date: any) => {
    setFormData({ ...formData, to: date });
  };
  /** Submut Form **/
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    if (id) {
      dispatch(updatedTask({ id, form: formData })).then((res: any) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      });
    } else {
      dispatch(createTask(formData)).then((res: any) => {
        console.log(res);
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      });
    }
  };
  /** DELETE Task **/
  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(deleteTask(id)).then((res: any) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      });
    }
  };
  if (!data && loading) {
    return <Loading />;
  }
  return (
    <SContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <Select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        >
          <option value="PENDING">Pending</option>
          <option value="COMPLETED">Completed</option>
        </Select>
        <SwitchLabel>
          <SwitchInput
            type="checkbox"
            name="urgent"
            checked={formData.urgent}
            onChange={handleSwitchChange}
          />
          Urgent ?
        </SwitchLabel>
        <Select
          name="importance"
          value={formData.importance}
          onChange={handleInputChange}
        >
          <option value={1}>Low Priority</option>
          <option value={2}>Normal Priority </option>
          <option value={3}>High Priority</option>
          <option value={4}>Critical or Urgent</option>
        </Select>
        <DatePicker
          selected={initialDateFrom}
          onChange={handleFromDateChange}
          dateFormat={"yyyy/MM/dd"}
        />
        <DatePicker
          selected={initialDateTo}
          onChange={handleToDateChange}
          dateFormat={"yyyy/MM/dd"}
        />
        <ButtonPrimary label="Submit" color="Success" onClick={handleSubmit} />
        {id ? (
          <ButtonPrimary label="Delete" color="Danger" onClick={handleDelete} />
        ) : null}
      </FormContainer>
    </SContainer>
  );
};

export default Task;
