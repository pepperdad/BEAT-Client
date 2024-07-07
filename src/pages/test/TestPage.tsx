import { IconTextfiedlDelete } from "@assets/svgs";
import Chip from "@components/commons/chip/Chip";
import TextArea from "@components/commons/inputs/textAreas/TextArea";
import TextField from "@components/commons/inputs/textFields/TextField";
import { useState } from "react";

const TestPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputAreaValue, setInputAreaValue] = useState("");

  const handleChangeInput = (value: string) => {
    setInputValue(value);
  };
  const handleChangeInputArea = (value: string) => {
    setInputAreaValue(value);
  };
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
    </div>
  );
};

export default TestPage;
