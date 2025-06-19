// User Dashboard JavaScript
class UserDashboard {
    constructor() {
        this.userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            memberSince: '2023-01-15',
            projects: 12,
            tasks: 45,
            completed: 38
        };
        
        this.init();
    }
    
    init() {
        console.log('🚀 User Dashboard initialized');
        this.loadUserData();
        this.setupEventListeners();
        this.animateStats();
    }
    
    loadUserData() {
        // Simulate loading user data
        setTimeout(() => {
            document.getElementById('user-name').textContent = this.userData.name;
            document.getElementById('user-email').textContent = this.userData.email;
            document.getElementById('member-since').textContent = new Date(this.userData.memberSince).toLocaleDateString();
            
            console.log('✅ User data loaded');
        }, 500);
    }
    
    animateStats() {
        // Animate statistics counters
        setTimeout(() => {
            this.animateCounter('projects-count', this.userData.projects);
            this.animateCounter('tasks-count', this.userData.tasks);
            this.animateCounter('completed-count', this.userData.completed);
        }, 1000);
    }
    
    animateCounter(elementId, targetValue) {
        const element = document.getElementById(elementId);
        let currentValue = 0;
        const increment = targetValue / 30;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentValue);
        }, 50);
    }
    
    setupEventListeners() {
        // Setup navigation event listeners
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.target.getAttribute('href').substring(1);
                this.handleNavigation(target);
            });
        });
    }
    
    handleNavigation(target) {
        console.log(`📍 Navigation: ${target}`);
        
        switch(target) {
            case 'profile':
                this.showSection('profile');
                break;
            case 'settings':
                alert('Settings panel would open here');
                break;
            case 'logout':
                if (confirm('Are you sure you want to logout?')) {
                    console.log('👋 User logged out');
                    alert('Logged out successfully!');
                }
                break;
        }
    }
    
    showSection(sectionId) {
        // Highlight the selected section
        document.querySelectorAll('.card').forEach(card => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.transform = 'scale(1.02)';
            targetSection.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.3)';
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UserDashboard();
});