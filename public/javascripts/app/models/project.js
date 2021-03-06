/* DO NOT MODIFY. This file was compiled Tue, 05 Apr 2011 21:18:15 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/models/project.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  App.Models.Project = (function() {
    function Project() {
      Project.__super__.constructor.apply(this, arguments);
    }
    __extends(Project, Backbone.MongoModel);
    Project.prototype.urlRoot = "/projects";
    Project.prototype.paramRoot = "project";
    return Project;
  })();
  App.Collections.ProjectsCollection = (function() {
    function ProjectsCollection() {
      ProjectsCollection.__super__.constructor.apply(this, arguments);
    }
    __extends(ProjectsCollection, Backbone.Collection);
    ProjectsCollection.prototype.model = App.Models.Project;
    ProjectsCollection.prototype.url = '/projects';
    return ProjectsCollection;
  })();
}).call(this);
