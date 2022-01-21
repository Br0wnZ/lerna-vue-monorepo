import JTableRow from '../components/JTableRow/JTableRow.vue'
import { action } from '@storybook/addon-actions';

// storiesOf('JTableRow', module)
//   .add('normal', () => ({
//     components: { JTableRow },
//     template:
//     `
//       <JTableRow
//         :values="values"
//       />
//     `,
//     data: () => ({
//       values: [
//         'José Silva',
//         'email@email.com'
//       ]
//     })
//   }))



export default {
  component: JTableRow,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Example/TableRow',
  //👇 Our events will be mapped in Storybook UI
  // argTypes: {
  //   onPinTask: {},
  //   onArchiveTask: {},
  // },
};

// export const actionsData = {
//   onPinTask: action('pin-task'),
//   onArchiveTask: action('archive-task'),
// };

const Template = args => ({
  components: { JTableRow },
  setup() {
    return { args, 
      // ...actionsData 
    };
  },
  template: '<JTableRow v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  values: ['Javi Moreno', 'jmoreno.valle@atsistemas.com']
  ,
};

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };