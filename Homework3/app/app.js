function initListeners() {
    $("#submit").click((e) => {
      e.preventDefault();
      let allUsers = JSON.parse(localStorage.getItem("Person"));
  
      let fn = $("#firstName").val();
      let ln = $("#lastName").val();
      let age = $("#age").val();
      let pn = $("#phoneNumber").val();
      let ea = $("#email").val();
      let sc = $("#classOne").val();
      let ct = $("#classTwo").val();
      let tc = $("#classThree").val();
  
      // make it required for both first and last name to be input
      if ( fn != "" && ln != "" && age != "" &&
        pn != "" && ea != "" && sc != "" && ct != "" ) {
        let userObj = {
          fName: fn,
          lName: ln,
          age: age,
          phoneNumber: pn,
          email: ea,
          classOne: sc,
          classTwo: ct,
          classThree: tc,
        };
        allUsers.push(userObj);
        //console.log(users);
        localStorage.setItem("Person", JSON.stringify(allUsers));
  
        $("#firstName").val("");
        $("#lastName").val("");
        $("#age").val("");
        $("#phoneNumber").val("");
        $("#email").val("");
        $("#classOne").val("");
        $("#classTwo").val("");
        $("#classThree").val("");
      } else {
        Swal.fire({
          title: "Fill out all feilds!",
          icon: "warning",
          showCancelButton: false,
          showConfirmButton: true,
        }); 
      }
    });
  
    $("#getName").click((e) => {
      e.preventDefault();
      $("#app").html("");
      console.log("Yo");
      let allUsers = JSON.parse(localStorage.getItem("Person"));
  
      $.each(allUsers, function (idx, user) {
        console.log(user.fName);
        $("#app").append(
          `<p><b>Full Name:</b> ${user.fName} ${user.lName} <b>Age:</b> ${user.age} <b>Phone Number:</b> ${user.phoneNumber} <b>Email Address:</b> ${user.email} <b>Classes:</b> ${user.classOne} ${user.classTwo} ${user.classThree}</p>`
        );
      });
    });
  }
  
  function initSite() {
    if (localStorage) {
      let people = localStorage.getItem("Person");
      // console.log(people);
      if (people) {
        let persons = JSON.parse(localStorage.getItem("Person"));
        console.log(persons);
      } else {
        localStorage.setItem("Person", "[]");
        Swal.fire({
          title: "No students have been added yet.",
          icon: "warning",
          showCancelButton: false,
          showConfirmButton: true,
        }); 
      }
    } else {
      console.log("No local storage found");
    }
  }
  
  $(document).ready(function () {
    initListeners();
    initSite();
  });
  