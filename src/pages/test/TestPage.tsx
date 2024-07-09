import { IconTextfiedlDelete } from "@assets/svgs";
import Chip from "@components/commons/chip/Chip";
import TextArea from "@components/commons/input/textArea/TextArea";
import TextField from "@components/commons/input/textField/TextField";
import Stepper from "@components/commons/stepper/Stepper";
import TimePicker from "@components/commons/timepicker/TimePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";

const TestPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputAreaValue, setInputAreaValue] = useState("");
  const [round, setRound] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleChangeInput = (value: string) => {
    setInputValue(value);
  };
  const handleChangeInputArea = (value: string) => {
    setInputAreaValue(value);
  };
  const onMinusClick = () => {
    setRound((prev) => prev - 1);
  };
  const onPlusClick = () => {
    setRound((prev) => prev + 1);
  };
  const handleDateChange = (value: Dayjs | null) => {
    setSelectedDate(value);
  };
  console.log(selectedDate);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          value={inputValue}
          onChangeValue={handleChangeInput}
          maxLength={30}
          placeholder="입력해주세요"
        />
        <TextArea
          value={inputAreaValue}
          onChangeValue={handleChangeInputArea}
          maxLength={300}
          placeholder="입력해주세요"
        />
      </div>
      <div style={{ display: "flex" }}>
        <Chip
          label="바보"
          color="pink"
          icon={<IconTextfiedlDelete />}
          onClick={() => console.log("clicked chip")}
        />
        <Chip label="테스트" />
      </div>
      <Stepper max={3} round={round} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
      <TimePicker value={selectedDate} onChangeValue={handleDateChange} />{" "}
    </div>
  );
};

export default TestPage;
