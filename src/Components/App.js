
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data : [] ,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    // kiểm tra xem có localstorge chưa
    try {
      if(localStorage.getItem('userData') === null)
    {
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data:temp
      });
    }
    } catch (error) {
      this.setState({ error });
    }
    
  }
  
  deleteUser = (idUser) => {
   // console.log(idUser);
   // sử dụng hàm filter để xóa
    // var arr = [1,2,3];
    // var x = 2;
    // arr = arr.filter(item => item != x);
    // console.log(arr);


    var tempData= this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    });
    console.log(tempData);
    // tempData.forEach((value,key) => {
    //   if(value.id === idUser)
    //   {
        
    //   }
    // })


    // đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(tempData));

  }

  changeEditUserStarus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  doiTrangthaii = ()=>{
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }

  editUser = (user) =>{
    console.log('Đã kết nối');
    this.setState({
      userEditObject: user
    });
    
  }

  getTextSearch = (dl) => {
    this.setState(
      {
        searchText:dl
      }
    );
    
  }

  getUserEditInfoApp = (info) => {
    
    this.state.data.forEach((value,key) => {
      if(value.id === info.id)
      {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    // đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  getNewUserData = (name,tel,Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    
    items.push(item);
    this.setState({
      data:items
    });
    // đẩy vào dữ liệu
    localStorage.setItem('userData',JSON.stringify(items));
  }
  

  render() {
    //localStorage.setItem('userData',JSON.stringify(DataUser));


    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) // tìm thấy trả về vị trí không tìm thấy trả về -1
      {
        ketqua.push(item);
      }
    })
    return (
      <div>
      <Header></Header>
      <div className="searchform">
        <div className="container">
          <div className="row">
            <Search
            getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info) }
            userEditObject={this.state.userEditObject}
            checkConnectProps={(dl)=>this.getTextSearch(dl)}
            ketnoi={()=>this.doiTrangthaii()} 
            hienThiForm={this.state.hienThiForm}
            editUserStatus = {this.state.editUserStatus}
            changeEditUserStatus = {() => this.changeEditUserStarus()}
            ></Search>
            <TableData 
            deleteUser = {(idUser) => this.deleteUser(idUser)}
            editFun={(user) => this.editUser(user)} dataUserProps={ketqua}
            changeEditUserStatus = {() => this.changeEditUserStarus()}
            ></TableData>
            <AddUser hienThiForm={this.state.hienThiForm}
            add = {(name,tel,Permission) => {this.getNewUserData(name,tel,Permission)}}
            ></AddUser>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

