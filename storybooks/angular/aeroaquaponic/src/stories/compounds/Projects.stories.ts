// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { SectionComponent } from 'src/app/components/section/section.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ProjectsComponent } from 'src/app/compounds/sections/projects/projects.component';

export default {
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [
        ProjectsComponent,
        TypographyComponent,
        SectionComponent,
        HeadingComponent,
      ],
    }),
  ],
  title: 'Aeroaquaponic/Compounds/Section/Projects',
  component: ProjectsComponent,
} as Meta;

const Template: Story<ProjectsComponent> = (args: ProjectsComponent) => ({
  component: ProjectsComponent,
  props: args,
});

export const Projects = Template.bind({});
Projects.args = {
  title: 'Projects',
  subtitle: "Let's make this happen!",
  text: `At Aeroaquaponic, we believe that the solution that will change the dead-end
  direction of modern society lies in sustainability. However, not the
  sustainability that comes from the industry, but the one that comes from the
  eco-communities. We believe that communities that are capable of producing
  most and, ideally, all of their food and being self-sufficient are the
  answer. It is a countermeasure to consumerism which is the driving force
  behind unsustainable resource utilization.`,
};
