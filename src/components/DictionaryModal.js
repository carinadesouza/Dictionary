import React,{useEffect, useState} from "react";
import { Modal, Input } from "antd";
import { useNavigate } from "react-router-dom";

const DictionaryModal = ({  modalVisible, handleSaveDictionary, setModalVisible, }) => {
  const [word, setWord] = useState("");
  const [description, SetDescription] = useState("");
  const navigate = useNavigate(); 

useEffect(()=>{
 if (!modalVisible){
  setWord("");
  SetDescription("");
 }
},[modalVisible])

  const handleCancel = () => { 
    setModalVisible(false); 
    navigate("/"); // Navigate back to the home page
  };  
  const handleOk = () => {
    handleSaveDictionary(word,description);  
    setModalVisible(false); 
                     // Save dictionary data
    navigate("/"); // Navigate back to the home page
  };
 
  return (
    <Modal
      className="input"
      title="Lets Create A Word!!!!!!"
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        className="input"
        placeholder="Enter A New Word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <br />
      <br />
      <Input
        className="input"
        placeholder="Enter Description Of That Word"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />
    </Modal>
  );
};

export default DictionaryModal;