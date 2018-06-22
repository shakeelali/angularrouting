import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public courses = [
    {
      id : 2222,
      title : "JavaScript",
      display : "javascript"
    },
    {
      id : 2,
      title : "C#",
      display : "csharp"
    },
    {
      id : 3,
      title : "Design Patterns",
      display : "design-patterns"
    }
  ];

  public sessions = [
    {
      courseid: 2222,
      id : 1,
      title : "Introduction to JavaScript",
      display : "introduction-to-javascript",
      description : "Intro1",
      content : "<b>Introduction to JavaScript</b>"
    },
    {
      courseid: 2222,
      id : 2,
      title : "Object Oriented Programming",
      display : "object-oriented-programming",
      description : "Intro2",
      content : "<b>Object-Oriented Programming</b>"
    },

    {
      courseid: 2,
      id : 3,
      title : "C# - Session1",
      display : "common-language-runtime",
      description : "Intro1",
      content : "<b>Common Language Runtime</b>"
    },
    {
      courseid: 2,
      id : 4,
      title : "C# - Session2",
      display : "threading-and-synchronization",
      description : "Intro2",
      content : "<b>Threading and Synchronization</b>"
    },

    {
      courseid: 3,
      id : 5,
      title : "Design Patterns - Session1",
      display : "need-of-extensibility",
      description : "Intro1",
      content : "<b>Need of Extensibility</b>"
    },
    {
      courseid: 3,
      id : 6,
      title : "Design Patterns - Session2",
      display : "need-of-reusability",
      description : "Intro2",
      content : "<b>Need of Reusability</b>"
    }
  ] ;

  

  constructor() { }

  public getSessions ( coursedisplay : string ) { 
    
    var courses = this.courses.filter(course => course.display == coursedisplay) ;
    
    var course ; 
    
    if ( courses.length == 1) {
      course = courses[0] ; 
    } 
    else {
      return "Course Not Found" ;
    }

    return this.sessions.filter( session => session.courseid == course.id ) ;
  }


  public getSessionContent(coursedisplay: any, sessiondisplay : any) { 
    
    var courses = this.courses.filter(course => course.display == coursedisplay) ;
    
    var course ; 
    
    if ( courses.length == 1) {
      course = courses[0] ; 
    } 
    else {
      return "Course Not Found" ;
    }

    var sessions = this.sessions.filter( session => session.courseid == course.id && session.display == sessiondisplay) ;
    
    if ( sessions.length == 1) {
      return sessions[0]; 
    } else {
      return "Not Found";
    }
  }

}
