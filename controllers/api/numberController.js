import { RandomNumber } from '../../models/number-model.js';

export const createNumber = async (req, res) => {
  try {
    const newNumber = await RandomNumber.create({
      number: req.body.number
    });

    console.log(newNumber);
    res.status(201).json({
        status: 'success',
        data: newNumber
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getAllNumbers = async (req, res) => {
    try {
        const numbers = await RandomNumber.find({})
        console.log(numbers)

        res.status(200).json({
            status: 'success',
            data: numbers
        });
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const getNumberById = async (req, res) => {
    try {
        const number = await RandomNumber.findById(req.params.id)
        console.log(number)
        res.status(200).send({
            status: 'success',
            data: number
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}   

export const updateNumber = async (req, res) => {
    try {
      const updatedNumber = await RandomNumber.findByIdAndUpdate(
        req.params.id,
        {
          number: req.body.updatedNumber
        },
        { new: true } // Add this option to return the updated document
      );
  
      console.log(updatedNumber);
      res.status(200).send({
        status: 'success',
        data: updatedNumber
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

export const deleteNumber = async (req, res) => {
    try {
        await RandomNumber.findByIdAndDelete(req.params.id)
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