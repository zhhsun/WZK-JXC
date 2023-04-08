const Classroom = require("../models").Classroom;

module.exports = {
  async list(req, res) {
    try {
      const classrooms = await Classroom.findAll({
        where: {},
      });
      res.status(200).send(classrooms);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getById(req, res) {
    return Classroom.findByPk(req.params.id, {
      include: [
        {
          model: Student,
          as: "students",
        },
      ],
    })
      .then((classroom) => {
        if (!classroom) {
          return res.status(404).send({
            message: "Classroom Not Found",
          });
        }
        return res.status(200).send(classroom);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  async add(req, res) {
    try {
      const classroom = await Classroom.create({
        class_name: req.body.class_name,
      });
      res.status(201).send(classroom);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  update(req, res) {
    return Classroom.findByPk(req.params.id, {
      include: [
        {
          model: Student,
          as: "students",
        },
      ],
    })
      .then((classroom) => {
        if (!classroom) {
          return res.status(404).send({
            message: "Classroom Not Found",
          });
        }
        return classroom
          .update({
            class_name: req.body.class_name || classroom.class_name,
          })
          .then(() => res.status(200).send(classroom))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Classroom.findByPk(req.params.id)
      .then((classroom) => {
        if (!classroom) {
          return res.status(400).send({
            message: "Classroom Not Found",
          });
        }
        return classroom
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
