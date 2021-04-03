import React, { Component } from 'react';

class TableDataRow extends Component {
  perMissionShow = () =>{
    if(this.props.Permission ===1)
    {
      return "Admin";
    }
    else if(this.props.Permission === 2)
    {
      return "Moderator";
    }
    else{
      return "Normal User";
    }
  }
  
  deleteButtonClick = (idUser) => {
    this.props.deleteButtonClick(idUser);
  }
  editClick = () =>{
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  }

  // đã có editFunClick
  render() {
    return (
      
      <tr><td >{this.props.stt+1}</td>
        <td style={{minWidth: '200px'}}>{this.props.userName}</td>
        <td style={{minWidth: '200px'}}>{this.props.tel}</td>
        <td style={{minWidth: '200px'}}>{this.perMissionShow()}</td>
        <td>
          <div className="btn-group" style={{minWidth: '200px'}}>
            <div className="btn btn-warning" onClick={() => this.editClick()}>Sửa</div>
            <div className="btn btn-danger" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>Xóa</div>
          </div>  
        </td>
      </tr>
    );
  }
}

export default TableDataRow;