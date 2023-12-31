import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import InterviewPostionSelector from "../Positions/InterviewPositionSelector";

interface InterviewTemplateFormProps {
  onSubmit: (templateName: string, questions: string[]) => void;
}

function InterviewCreationForm() {
  const [templateName, setTemplateName] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([])

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handlePositionChange = (position: string) => {
    if (selectedPositions.includes(position)) {
      setSelectedPositions(prev => prev.filter(pos => pos !== position))
    } else {
      setSelectedPositions(prev => [...prev, position])
    }
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/interview-template",
        {
          templateName,
          questions: questions.map(question => ({ question })),
        }
      );

      console.log("Created new interview template:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to create interview template", error.message);
      } else {
        console.log("Failed to create interview template:", error);
      }
    }
  };

  return (
    <Form onSubmit={handleFormSubmit} className="interview-creation-form">
        <Form.Group controlId="templateName">
        <Form.Label>Interview Title</Form.Label>
        <Form.Control type="text" value={templateName} onChange={e => setTemplateName(e.target.value)} />
        </Form.Group>
        <InterviewPostionSelector onPositionChange={handlePositionChange} selectedPositions={selectedPositions} />
        <div>
          Selected Positions: {selectedPositions.join(", ")}
        </div>
       {questions.map((question, index) => (
        <Form.Group key={index} controlId={`question${index}`}>
            <Form.Label>Question {index + 1}</Form.Label>
            <Form.Control type="text" value={question} onChange={e => handleQuestionChange(index, e.target.value)} />
            </Form.Group>
       ))}
       <Button variant="primary" type="button" onClick={() => setQuestions([...questions, ''])}>
       Add Question
       </Button>
       <Button variant="primary" type="submit">
       Create Template
       </Button>
    </Form>
  )
}

export default InterviewCreationForm