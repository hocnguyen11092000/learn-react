import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  deleteButtonClick = (idUser) => {
    //console.log(idUser);
    this.props.deleteUser(idUser);
  }
  mappinDataUser = () =>
    this.props.dataUserProps.map((value,key) =>(
  
      <TableDataRow 
      deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
      changeEditUserStatus = {() => this.props.changeEditUserStatus()}
      editFunClick={(user) =>{this.props.editFun(value)}} userName={value.name}
      key={key}
      stt={key} 
      tel={value.tel}
      Permission={value.Permission}
      id={value.id}
      ></TableDataRow>
    ))
  
      // đã có props editFun
  render() {
    
    return (
      <div className="col">
  <table className="table-stripde table-hover table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện Thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {this.mappinDataUser()}
    </tbody>
  </table>
</div>

    );
  }
}

export default TableData;