import React,{useState} from "react";
import { List,Button } from "antd";

const customStyle = {
  fontSize: "1.1em",
  fontWeight: "bold",
};

const DictionaryList = ({ dictionarys,onDelete}) => {  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);  

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page); 
    setPageSize(pageSize);
  };
  return (
    <div className="dictionarys-list">
      <List
        header={<h3>The Word List</h3>}
        bordered
        dataSource={dictionarys}
        renderItem={(item,index) => (
          <List.Item>
            <h3 style={customStyle}>Word</h3>
            {item.word}
            <h3 style={customStyle}>Description</h3>
            {item.description} 
            <Button onClick={() => onDelete(index)} type="danger" style={{ marginLeft: "1000px" }}>
              Delete
            </Button>
          </List.Item>
        )}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: dictionarys.length,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};

export default DictionaryList;

