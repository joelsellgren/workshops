import User from '../../models/user-model.js';

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    console.log(newUser);
    res.status(201).json({
        status: 'success',
        data: newUser
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        console.log(users)

        res.status(200).json({
            status: 'success',
            data: users
        });
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        res.status(200).send({
            status: 'success',
            data: user
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}   

export const updateUser = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          email: req.body.email
        },
        { new: true } // Add this option to return the updated document
      );
  
      console.log(updatedUser);
      res.status(200).send({
        status: 'success',
        data: updatedUser
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
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