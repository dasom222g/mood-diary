import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Emotion from "../components/Emotion";
import Title from "../components/Title";
import DiaryInput from "../components/DiaryInput";
import Button from "../components/Button";
import { useRecoilState } from "recoil";
import { diaryListState } from "../data/dataState";
import { DiaryType } from "../lib/type";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Item = () => {
  // logic
  const params = useParams();
  const id = Number(params.itemId);

  const history = useNavigate();

  const [diaryList, setDiaryList] = useRecoilState(diaryListState);

  const [selectedDiary, setSelectedDiary] = useState<DiaryType | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editingMessage, setEditingMessage] = useState("");

  const changeMode = () => {
    setIsEditMode(true);
  };

  const handleChange = (value: string) => {
    setEditingMessage(value);
  };

  const handleCancel = () => {
    selectedDiary && setEditingMessage(selectedDiary.diary);
    setIsEditMode(false);
  };

  const updateDiary = () => {
    const updateDiaryList = diaryList.map((item) => {
      return item.id === id ? { ...item, diary: editingMessage } : item;
    });

    setDiaryList(updateDiaryList);
    setIsEditMode(false);
  };

  const removeDiary = () => {
    const isConfirm = window.confirm("삭제하시겠습니까?");
    if (!isConfirm) return;
    const filterDiaryList = diaryList.filter((diary) => diary.id !== id);
    setDiaryList(filterDiaryList);
    history("/");
  };

  useEffect(() => {
    // 현재 데이터 세팅
    const item = id && diaryList.find((diary) => diary.id === id);

    if (!item) return;
    setSelectedDiary(item);
    setEditingMessage(item.diary);
  }, [diaryList, id]);

  // view
  return (
    <>
      {selectedDiary && (
        <div className="border border-mood-gray-700 rounded-xl px-4 py-6">
          <div className="py-2">
            {/* START: date */}
            <p>{selectedDiary.date.totalText}</p>
            {/* START: date */}
          </div>
          <div className="py-2 flex justify-end">
            <IconButton
              aria-label="edit"
              disabled={isEditMode}
              onClick={changeMode}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              disabled={isEditMode}
              onClick={removeDiary}
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="py-2">
            <Emotion data={selectedDiary.mood} size={"large"} />
          </div>
          <div className="py-2">
            <Title mainTitle={selectedDiary.mood.description} />
          </div>
          <div className="py-2">
            <DiaryInput
              value={editingMessage}
              readonly={!isEditMode}
              bgColor={isEditMode ? "" : "bg-mood-purple"}
              isReset={false}
              isFocus={isEditMode}
              onChage={handleChange}
            />
          </div>
        </div>
      )}
      {isEditMode && (
        <div className="pt-8">
          <div className="flex">
            <div className="px-1 w-full">
              <Button text="일기 수정하기" onClick={updateDiary} />
            </div>
            <div className="px-1 w-full">
              <Button
                text="취소하기"
                className="bg-transparent !text-mood-gray-700 border border-mood-gray-700"
                onClick={handleCancel}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
