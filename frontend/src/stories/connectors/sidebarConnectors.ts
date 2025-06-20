import { openSidebar, closeSidebar, toggleSidebar } from "../../redux/sidebarSlice";

export const mapStateToProps = (state) => ({
    isOpen: state.sidebar.isOpen,
});

export const mapDispatchToProps = (dispatch) => ({
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar()),
    toggleSidebar: () => dispatch(toggleSidebar()),
});