import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tempvalue:'',
      userObj:{}
    });
  }
  getUserEditInfo = (info) => {
    this.setState({
      userObj : info
    });
    this.props.getUserEditInfoApp(info);
  }
  isShowEditForm = () => {
    if(this.props.editUserStatus === true)
    {
      return <EditUser 
      getUserEditInfo = {(info) => this.getUserEditInfo(info)}
      userEditObject={this.props.userEditObject}
      changeEditUserStatus = {() => this.props.changeEditUserStatus() } />
    }
  }

  isChange = (event) => {
  //  console.log(event.target.value);
    this.setState({
      tempvalue:event.target.value
    });
    this.props.checkConnectProps(this.state.tempvalue);
  }

  hienthiNut = () =>{
    if(this.props.hienThiForm === true)
    {
      return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketnoi()} >Đóng</div>;
    }
    else 
    {
      return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketnoi()} >Thêm mới</div>;
    }
  }
  render() {
    return (
      <div className="col-12">
       {this.isShowEditForm()}
          <div className="form-group">
            <div className="btn-group">
              <input type="text" className="form-control"  onChange={(event) => this.isChange(event)} placeholder="Nhập tên: " />
              <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempvalue)}>Tìm</div>
            </div>
           
          </div>
          
          <hr></hr>
          <div className="btn-group1">
            {this.hienthiNut()}
          </div>
      </div>

    );
  }
}

export default Search;