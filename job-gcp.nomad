# to run nomad job run -var="IMAGE_VERSION=1.2.0,ENVIRONMENT=production" job.nomad
variable "IMAGE_VERSION" {
 type    = string
}

variable "ENVIRONMENT" {
 type    = string
}

variable "TIMESTAMP" {
 type    = string
 default = "-1"
}

job "alceo-design" {
  datacenters = ["dc1"]
  update {
    max_parallel = 1
    auto_revert = true
    canary = 1
    auto_promote = true
  }
  group "app" {
    #count = 1
    scaling {
      enabled = true
      min = 2
      max = 5
      policy {
        cooldown = "30s"
        evaluation_interval = "30s"
        check "avg_cpu" {
          source = "nomad-apm"
          query = "avg_cpu-allocated"
          query_window = "1m"
          strategy "target-value" {
            target = 50
          }
        }
        check "avg_memory" {
          source = "nomad-apm"
          query = "avg_memory-allocated"
          query_window = "1m"
          strategy "target-value" {
            target = 70
          }
        }
      }
    }
    
    network {
      port "http" {
        to = 8080
      }
    }

    service {
      name = "alceo-design"
      port = "http"
    }

    task "apps" {
      resources {
        memory = 64
        cpu = 250
        memory_max = 256
      }
      logs {
        max_files     = 3
        max_file_size = 5
      }
      driver = "docker"
      config {
        image = "218649523932.dkr.ecr.ap-southeast-1.amazonaws.com/alceo-design:${var.IMAGE_VERSION}"
        ports = ["http"]
      }

      artifact {
        #source      = "https://fileserver.sirka.io/${var.ENVIRONMENT}/alceo-design.env"
        source      = "http://10.16.133.126/${var.ENVIRONMENT}/alceo-design.env"
        destination = "local/alceo-design.env.tpl"
        mode        = "file"
      }

      template {
        source      = "local/alceo-design.env.tpl"
        destination = "local/alceo-design.env"
        env         = true
      }

      template {
        data      = "${var.TIMESTAMP}"
        destination = "local/timestamp.txt"
      }
      
    }
  }
}
