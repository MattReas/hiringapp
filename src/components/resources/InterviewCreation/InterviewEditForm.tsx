import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

interface InterviewEditFormProps {
  templateId: string;
}

interface InterviewQuestion {
  id: number;
  question: string;
}

function InterviewEditForm({ templateId }: InterviewEditFormProps) {
  const [templateName, setTemplateName] = useState("");
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const templateNameResponse = await axios.get(`http://localhost:3000/interview-template/${templateId}`);
        const templateQuestionResponse = await axios.get(`http://localhost:3000/interview-template/${templateId}/questions`);
        const questionsArray = templateQuestionResponse.data as InterviewQuestion[];

        setTemplateName(templateNameResponse.data.templateName || "");
        setQuestions(questionsArray || []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Failed to fetch interview template", error.message);
        } else {
          console.log("Failed to fetch interview template:", error);
        }
      }
    };

    fetchTemplate();
  }, [templateId]);

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(), // temporary id, you can use any unique value here
        question: '',
      }
    ]);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/interview-template/${templateId}`,
        {
          templateName,
          questions,
        }
      );

      console.log("Updated interview template:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to update interview template", error.message);
      } else {
        console.log("Failed to update interview template:", error);
      }
    }
  };

  return (
    <Form onSubmit={handleFormSubmit} className="interview-edit-form">
      <Form.Group controlId="templateName">
        <Form.Label>Interview Title</Form.Label>
        <Form.Control type="text" value={templateName} onChange={e => setTemplateName(e.target.value)} />
      </Form.Group>
      {questions.map((question, index) => (
        <Form.Group key={index} controlId={`question${index}`}>
          <Form.Label>Question {index + 1}</Form.Label>
          <Form.Control type="text" value={question.question} onChange={e => handleQuestionChange(index, e.target.value)} />
        </Form.Group>
      ))}
      <Button variant="primary" type="button" onClick={handleAddQuestion}>
        Add Question
      </Button>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}

export default InterviewEditForm
