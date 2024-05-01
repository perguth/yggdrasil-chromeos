#!/bin/sh

NAME=yggdrasil-chromeos

# Clean up
trap "cd .. && rm -rf $NAME" EXIT

# Install Ansible
sudo apt update && sudo apt install -y ansible

# Clone repository
git clone https://github.com/perguth/$NAME.git
cd $NAME

# Run playbook
ansible-playbook playbook.yml
