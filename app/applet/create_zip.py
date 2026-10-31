import shutil
import os

def create_clean_zip(output_filename, source_dir):
    # Temporary directory to stage files
    temp_dir = 'temp_source'
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir)
    
    # Files/folders to ignore
    ignore_patterns = shutil.ignore_patterns(
        'node_modules', '.next', '.git', 'dist', 'build', 
        '*.zip', '*.tar.gz', 'temp_source', '.cache'
    )
    
    print(f"Staging files from {source_dir} to {temp_dir}...")
    shutil.copytree(source_dir, temp_dir, ignore=ignore_patterns)
    
    print(f"Creating archive {output_filename}.zip...")
    shutil.make_archive(output_filename, 'zip', temp_dir)
    
    print("Cleaning up temp directory...")
    shutil.rmtree(temp_dir)
    print("Done!")

if __name__ == "__main__":
    # Ensure public exists
    if not os.path.exists('public'):
        os.makedirs('public')
    create_clean_zip('public/qc_marketing_website_source', '.')
