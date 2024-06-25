import {
  HomeIcon,
  BookmarkSquareIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  ArchiveBoxIcon,
} from "@heroicons/vue/24/solid";
const routes = computed(() => [
  // {
  //   to: "/",
  //   label: "home",
  //   icon: HomeIcon,
  // },
  { to: "/produtos", label: "products", icon: ArchiveBoxIcon },
  {
    to: "/orders",
    label: "orders",
    icon: BookmarkSquareIcon,
  },
  {
    to: "/chat",
    label: "chat",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    to: "/perfil",
    label: "profile",
    icon: UserIcon,
  },
]);
export const useDrawer = defineStore("drawer", {
  state: () => {
    return {
      active: false,
      routes,
    };
  },
  actions: {
    toggleActive() {
      this.active = !this.active;
    },
  },
});
