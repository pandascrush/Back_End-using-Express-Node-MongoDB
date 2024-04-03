const mongoose = require("mongoose");
const { EmpModel } = require("../model/empmodel");

// Get All Employee Values
exports.getEmployee = async (req, res) => {
  const Empdata = await EmpModel.find({});
  res.json(Empdata);

  // EmpModel.find({}).then(a=>{
  //     res.json(a)
  // })
};

// Get Single Employee Data

exports.getSingle = async (req, res) => {
  let { eid } = req.params;
  // console.log(eid);
  try {
    const EmpData = await EmpModel.findById(eid);
    res.status(200).json(EmpData);
  } catch (e) {
    res.status(400).json({ msg: "failed" });
  }
};

// Post the Employee Values
exports.postEmployee = async (req, res) => {
  // console.log(req.params.id);

  let { Name, Age, Course } = req.body;

  try {
    const EmpData = EmpModel.create({ Name, Age, Course });
    res.status(200);
    res.json({ msg: "success" });
  } catch (e) {
    res.status(400).json({ msg: "failed" });
  }

  // let EmpData = new EmpModel({
  //     Name:req.body.Name,
  //     Age:req.body.Age,
  //     Course:req.body.Course
  // })

  // const data = await EmpData.save()
  // res.json({"msg":"success"})
};

// Update the Values
exports.updateEmployee = async (req, res) => {
  const { eid } = req.params;

  try {
    const EmpData = await EmpModel.findByIdAndUpdate(
      {
        _id: eid,
      },
      {
        // Name: req.body.Name,
        // Age:req.body.Age,
        // Course:req.body.Course
        ...req.body,
      }
    );
    res.status(200).json({msg:"success",EmpData});
  } catch (e) {
    res.status(400).json({ msg: "failed" });
  }
};


// Delete Employee Values
exports.deleteEmployee = async (req, res) => {
  const { eid } = req.params;

  try {
    const EmpData = await EmpModel.findByIdAndDelete(eid);
    res.status(200).json({ msg: "successs" });
  } 
  catch (e) {
    res.status(400).json({ msg: "Not in the list" });
  }
};
