import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MainLayout } from '../../layouts/MainLayout';
import { BackIcon } from '../../shared/BackIcon';
import { TagForm } from './TagForm';
export const TagCreate = defineComponent({
  setup: (props, context) => {
    const router = useRouter()
    const route = useRoute()
    return () => (
      
      <MainLayout>
        {{
          title: () => '新建标签',
          icon: () => <BackIcon />,
          default: () => <TagForm />,
        }}
      </MainLayout>
    );
  },
});
