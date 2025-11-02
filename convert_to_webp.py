import os

# Root folder containing your images
root_dir = "photos"

def delete_jpgs(root_dir):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".jpg"):
                jpg_path = os.path.join(subdir, file)
                try:
                    os.remove(jpg_path)
                    print(f"🗑️ Deleted: {jpg_path}")
                except Exception as e:
                    print(f"❌ Error deleting {jpg_path}: {e}")

if __name__ == "__main__":
    confirm = input(f"⚠️ This will permanently delete all .jpg files under '{root_dir}'. Continue? (y/n): ")
    if confirm.lower() == 'y':
        delete_jpgs(root_dir)
        print("✅ All .jpg files removed.")
    else:
        print("❎ Operation cancelled.")