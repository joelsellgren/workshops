import { Name } from '../../models/name-model.js';

export const createName = async (req, res) => {
  try {
    const newName = await Name.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    console.log(newName);
    res.status(201).json(newName); // Send the created name as the response
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getAllNames = async (req, res) => {
    try {
        const names = await Name.find({})
        console.log(names)

        res.status(200).json({
            status: 'success',
            data: names});
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const getNameById = async (req, res) => {
    try {
        const name = await Name.findById(req.params.id)
        console.log(name)
        res.status(200).send({
            status: 'success',
            data: name
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}   

export const updateName = async (req, res) => {
    try {
      const updatedName = await Name.findByIdAndUpdate(
        req.params.id,
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName
        },
        { new: true } // Add this option to return the updated document
      );
  
      console.log(updatedName);
      res.status(200).send({
        status: 'success',
        data: updatedName
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

export const deleteName = async (req, res) => {
    try {
        await Name.findByIdAndDelete(req.params.id)
        res.status(204).send({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
         });
    }
}