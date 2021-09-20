import React,{useState} from 'react';
import {  DefaultButton,  PrimaryButton, DialogType, Dialog, DialogFooter,Icon,Label, TextField, ActionButton,autobind  } from 'office-ui-fabric-react'; 
import ReactTable from './ReactTable';

const Lessons = () => {  

     
    const [reactTableResult, setReactTableResult] = useState([]) 
const handleTableData = (tableRowColl) => {  
    setReactTableResult(tableRowColl)  
}  
    
        return (    
            <ReactTable tableData={handleTableData} renderTable={reactTableResult} ></ReactTable> 
//             <div class="container pt-5">
//     <div class="table-responsive">
//         <table class="table table-bordered">
//             <thead>
//             <tr>
//                 <th class="text-center">#</th>
//                 <th>Name</th>
//                 <th>Rating</th>
//                 <th>Description</th>
//                 <th class="text-center">Remove</th>
//             </tr>
//             </thead>
//             <tbody id="tbody">

//             </tbody>
//         </table>
//     </div>

//     <button class="btn btn-md btn-dark"
//             id="submitBtn" type="button">
//         Submit
//     </button>
//     <button class="btn btn-md btn-dark"
//             id="addBtn" type="button">
//         Add new Row
//     </button>
// </div>
    
        );     
}

export default Lessons;