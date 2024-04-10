async function VisitorCount() {
    try {
        const response = await fetch('CLOUD_FUNCTION_URL');
        if (response.ok) {  
            const data = await response.json();
            document.getElementById('visitor-count').textContent = data.visitorCount;
        } else {
            console.error('Failed to fetch visitor count:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error.message);
    }
}
window.onload = VisitorCount;