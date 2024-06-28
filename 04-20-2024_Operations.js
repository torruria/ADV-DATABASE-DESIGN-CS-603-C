//AndLogic
db.listingsAndReviews.find({$and: [{amenities: "KITCHEN"}, {amenities: "IRON"}]}); //andlogic

//elemaatch
db.listingsAndReviews.find({amenities: {$elemMatch: {$eq: "Wifi"}}});

//find
db.grades.find({ _id: ObjectId("65b9b6f769c4895078585dc0") })

//greaterThan
db.grades.find({ grade: { $gt:65  } })

//greaterThanOrEqal
db.grades.find({ "products.score": { $lt: 40  } })

//in
db.grades.find({ student_id: { $in: [12341, 942081] } })

db.grades.find({ _id: { $in: [ObjectId('65b9b75969c4895078585233'), ObjectId('65b9b75969c489507858wdhkks2')] } })

//insertMany
db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])

//insertOne
db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
})

//lessThan
db.grades.find({ "products.score": { $lt: 78  } })

//lessThanOrEquak
db.grades.find({ "products.score": { $lt: 59  } })

//or
db.listingsAndReviews.find({$or: [{amenities: "PARK"}, {amenities: "IRON"}]});
