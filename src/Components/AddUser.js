import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  //  console.log(name);
  //  console.log(value);

   this.setState({
     [name]:value
   });
   // pakage to item
  //  var item = {};
  //  item.id = this.state.id;
  //  item.name = this.state.name;
  //  item.tel = this.state.tel;
  //  item.Permission = this.state.Permission;
  // console.log(item);
  }
  

  kiemTraTrangThai = () =>{
    if(this.props.hienThiForm === true)
    return (
      <form>
      <div className="card border-primary mb-3 mt-2">
      <div className="card-header">Thêm mới người dùng</div>
      <div className="card-body text-primary">
        <div className="form-group">
          <input type="text" onChange={(event) =>{this.isChange(event)}} className="form-control" placeholder="Tên User" name="name"/>
        </div>
        <div className="form-group">
          <input type="text" onChange={(event) =>{this.isChange(event)}} className="form-control" placeholder="Điện thoại" name="tel" />
        </div>
        <div className="form-group">
          <select onChange={(event) =>{this.isChange(event)}} className="custom-select" name="Permission">
            <option value>Chọn quyền mặc định</option>
            <option value>Admin</option>
            <option value>Modractor</option>
            <option value>Normal</option>
          </select>
        </div>
        <div className="form-group">
          <input type="reset" className="btn btn-primary" onClick={(name,tel,Permission) => {this.props.add(this.state.name,this.state.tel,this.state.Permission)}} value="thêm mới">
            
          </input>
        </div>
      </div>
    </div>
    </form>
    );
  }

  render() {
   // console.log(this.props.hienThiForm)
   //console.log(this.state);
    return (
      <div className="col">
        {this.kiemTraTrangThai()}
      </div>
    );

    
  }
}

export default AddUser;