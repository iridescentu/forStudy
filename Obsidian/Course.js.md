// Course.js

import React, { useState, useEffect } from "react";
import axios from "axios";

export function Course() {
  const [courseDto, setCourseDto] = useState(null);

  useEffect(() => {
    const createCourse = async () => {
      try {
        const response = await axios.post("http://localhost:8080/test/create-course", {
          // 임의의 값을 전송
          courseName: "Sample Course",
          description: "This is a sample course.",
          // 나머지 필드도 필요에 따라 추가
        });
        setCourseDto(response.data);
      } catch (error) {
        console.error("Error creating course:", error);
      }
    };

    createCourse();
  }, []);

  return (
    <div>
      {courseDto ? (
        <div>
          <h1>{courseDto.courseName}</h1>
          <p>{courseDto.description}</p>
          {/* 기타 강의 정보 표시 */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
