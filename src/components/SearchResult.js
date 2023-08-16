import { List } from "antd";

const SearchResult = (props) => {
    return ( 
        <List
        header={<h3>Search Result</h3>}
        bordered
        dataSource={props.data}
        renderItem={(item,index) => (
          <List.Item>
            <h3 >Word</h3>
            {item.word}
            <h3 >Description</h3>
            {item.description} 
           
          </List.Item>
        )}
     
      />
 
     );
}
 
export default SearchResult;