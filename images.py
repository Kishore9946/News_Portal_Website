"""
Image utility module for News Portal Website
Handles downloading and processing images for news articles
"""

import os
import requests
from pathlib import Path
from typing import Optional, List
import json

class ImageManager:
    """Manages image downloads and storage for news portal"""
    
    def __init__(self, image_dir: str = "News-Portal/images"):
        self.image_dir = image_dir
        Path(self.image_dir).mkdir(parents=True, exist_ok=True)
    
    def download_image(self, url: str, filename: Optional[str] = None) -> bool:
        """
        Download image from URL and save locally
        
        Args:
            url: Image URL to download
            filename: Optional custom filename
            
        Returns:
            True if successful, False otherwise
        """
        try:
            if not url:
                print(f"Invalid URL: {url}")
                return False
            
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            
            # Generate filename from URL if not provided
            if not filename:
                filename = url.split('/')[-1].split('?')[0]
                if not filename or '.' not in filename:
                    filename = f"image_{hash(url) % 10000}.jpg"
            
            filepath = os.path.join(self.image_dir, filename)
            
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            print(f"Downloaded: {filename}")
            return True
            
        except Exception as e:
            print(f"Error downloading {url}: {str(e)}")
            return False
    
    def batch_download(self, urls: List[str]) -> dict:
        """
        Download multiple images
        
        Args:
            urls: List of image URLs
            
        Returns:
            Dictionary with success/failure counts
        """
        results = {"success": 0, "failed": 0}
        
        for url in urls:
            if self.download_image(url):
                results["success"] += 1
            else:
                results["failed"] += 1
        
        return results
    
    def get_local_path(self, filename: str) -> str:
        """Get local path for an image file"""
        return os.path.join(self.image_dir, filename)
    
    def image_exists(self, filename: str) -> bool:
        """Check if image file exists locally"""
        return os.path.exists(os.path.join(self.image_dir, filename))


def extract_images_from_json(json_file: str) -> List[str]:
    """Extract image URLs from JSON file"""
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        urls = []
        if isinstance(data, list):
            for item in data:
                if isinstance(item, dict) and 'image' in item:
                    urls.append(item['image'])
        
        return urls
    except Exception as e:
        print(f"Error reading {json_file}: {str(e)}")
        return []


if __name__ == "__main__":
    # Example usage
    manager = ImageManager()
    
    # Download sample images if needed
    sample_urls = [
        "https://loremflickr.com/600/400/news",
        "https://loremflickr.com/600/400/technology"
    ]
    
    print("Image Manager initialized")
    print(f"Image directory: {manager.image_dir}")
