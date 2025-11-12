// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 给所有购买按钮添加点击事件
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取商品信息
            const card = this.closest('.product-card');
            const productName = card.querySelector('h4').textContent;
            const productPrice = card.querySelector('.price').textContent;
            
            // 显示购买确认
            if(confirm(`确定要购买 ${productName} 吗？\n价格：${productPrice}`)) {
                // 模拟购买成功
                alert('购买成功！\n感谢您的支持，我们会尽快为您发货！');
                
                // 添加购买成功的视觉效果
                this.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
                this.textContent = '已购买';
                this.disabled = true;
            }
        });
    });
    
    // 平滑滚动效果
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else if (targetId === '#products') {
                const productsSection = document.querySelector('.products-section');
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else if (targetId === '#contact') {
                const footer = document.querySelector('.store-footer');
                footer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 页面滚动时的导航栏效果
    let lastScrollTop = 0;
    const header = document.querySelector('.store-header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动，隐藏导航栏
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动，显示导航栏
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 商品图片点击放大效果
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(image => {
        image.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    console.log('小白网店页面加载完成！');
});