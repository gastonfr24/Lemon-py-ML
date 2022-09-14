import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import { get_projects } from "redux/actions/machine-learning";
import ProjectCard from "components/IA-Projects/ProjectCard";
import LoaderProyect from "components/loaders/LoaderProyect";

function ProjectsList({ get_projects, projects }) {
  useEffect(() => {
    get_projects();
  }, []);

  return (
    <FullWidthLayout>
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-wrap -m-4 ">
            {projects ? (
              projects.map((project) => (
                <>
                  <ProjectCard data={project} />
                </>
              ))
            ) : (
              <>
                <LoaderProyect /> <LoaderProyect /> <LoaderProyect />
              </>
            )}
          </div>
        </div>
      </section>
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  projects: state.reglineal.projects,
});

export default connect(mapStateToProps, {
  get_projects,
})(ProjectsList);
