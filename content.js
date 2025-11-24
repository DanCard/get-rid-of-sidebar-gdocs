// Function to simulate a real mouse click with full event chain
function simulateClick(element) {
  const events = ['mousedown', 'mouseup', 'click'];
  events.forEach(eventType => {
    const event = new MouseEvent(eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1
    });
    element.dispatchEvent(event);
  });
}

// Function to hide the sidebar using CSS as a backup
function hideSidebarWithCSS() {
  const sidebar = document.querySelector('.left-sidebar-container');
  if (sidebar) {
    sidebar.style.setProperty('display', 'none', 'important');
    sidebar.style.setProperty('width', '0', 'important');
    sidebar.style.setProperty('min-width', '0', 'important');
    console.log('Google Docs Sidebar Hider: Sidebar hidden with CSS');
    return true;
  }
  return false;
}

// Main function to hide the sidebar
function hideSidebar() {
  // First try clicking the hide button with proper mouse events
  const hideButton = document.querySelector('[aria-label="Hide tabs & outlines"]');

  if (hideButton) {
    const sidebar = document.querySelector('.left-sidebar-container');
    if (sidebar && !sidebar.classList.contains('left-sidebar-container-collapsed')) {
      console.log('Google Docs Sidebar Hider: Found hide button, simulating click...');
      simulateClick(hideButton);

      // Wait a moment and check if it worked, if not use CSS
      setTimeout(() => {
        const sidebarCheck = document.querySelector('.left-sidebar-container');
        if (sidebarCheck && !sidebarCheck.classList.contains('left-sidebar-container-collapsed')) {
          console.log('Google Docs Sidebar Hider: Click did not work, using CSS fallback');
          hideSidebarWithCSS();
        } else {
          console.log('Google Docs Sidebar Hider: Sidebar hidden successfully via click');
        }
      }, 300);
      return true;
    }
  } else {
    // If no hide button found, try CSS directly
    return hideSidebarWithCSS();
  }
  return false;
}

// Run exactly 7 attempts to catch the sidebar quickly, then stop
setTimeout(() => hideSidebar(), 300);
setTimeout(() => hideSidebar(), 600);
setTimeout(() => hideSidebar(), 1000);
setTimeout(() => hideSidebar(), 2000);
setTimeout(() => hideSidebar(), 3500);
setTimeout(() => hideSidebar(), 5000);
setTimeout(() => hideSidebar(), 7000);
