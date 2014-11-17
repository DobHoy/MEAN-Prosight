var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses (){
  Course.find({}).exec(function(err, collection){
    if(collection.length === 0)
    {

      Course.create({title: 'C# for beginners', featured:true, published: new Date('1/1/2013'), tags:['c#', 'beginners']});
      Course.create({title: 'Perl for beginners', featured:true, published: new Date('1/1/2012'), tags:['perl', 'beginners']});
      Course.create({title: 'C# Advanced', featured:true, published: new Date('1/1/2011'),tags:['c#', 'advanced']});
      Course.create({title: 'Intro to Java', featured:true, published: new Date('1/1/2000'),tags:['Java', 'beginners', 'textbook']});
      Course.create({title: 'Javascript & me', featured:true, published: new Date('1/1/2010'), tags:['Javascript', 'textbook']});
      Course.create({title: 'Swift & me', featured:true, published: new Date('1/1/2002'),tags:['swift', 'textbook']});
      Course.create({title: 'Lean Startups', featured:true, published: new Date('1/1/1998'), tags:['Lean', 'Startups']});
      Course.create({title: 'The Digital Economy', featured:true, published: new Date('1/1/2016'), tags:['Startups', 'Economy']});
      Course.create({title: 'I love startups - A Bio', featured:true, published: new Date('1/1/2017'),tags:['Startups']});

    }
  });
}
  
exports.createDefaultCourses = createDefaultCourses;